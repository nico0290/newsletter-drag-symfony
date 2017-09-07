<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Goutte\Client;
use GuzzleHttp\Client as GuzzleClient;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController extends Controller
{
    /**
     * @Route("/api", name="api")
     */

    public function indexAction(Request $request)
    {   
        $url = $request->query->get('url');

        $result = array();
        $client = new Client();
        $crawler = $client->request('GET', $url);

        $result = $crawler->filter('meta[property="og:title"]')->each(function ($node) {
            return $node->getNode(0)->attributes->getNamedItem('content')->textContent;
        });
        $chapo = $crawler->filter('meta[property="og:description"]')->each(function ($node) {
            return $node->getNode(0)->attributes->getNamedItem('content')->textContent;
        });
        $image = $crawler->filter('meta[property="og:image"]')->each(function ($node) {
            return $node->getNode(0)->attributes->getNamedItem('content')->textContent;
        });

        return new JsonResponse([
            'url'   => $url,
            'title' => $result[0],
            'chapo' => $chapo[0],
            'image' => $image[0],
        ]);
    }
}
