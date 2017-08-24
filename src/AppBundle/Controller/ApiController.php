<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Goutte\Client;
use GuzzleHttp\Client as GuzzleClient;

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

        echo "<pre>";

        print_r($result[0]);
        echo "<br />";
        print_r($chapo[0]);

        exit;
    }
}
