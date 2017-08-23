<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Goutte\Client;
use GuzzleHttp\Client as GuzzleClient;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */


    public function indexAction(Request $request)
    {   


        $result = array();
        $client = new Client();
        $crawler = $client->request('GET', 'http://www.explorimmo.com/edito/actualite-immobiliere/detail/article/credit-immobilier-le-taux-recommencerait-il-a-reculer.html?utm_source=neolane&utm_medium=email&utm_term=10082017&utm_campaign=newsletters_edito_ei&?utm_source=explorimmo&utm_medium=email&utm_term=2');

        $result = $crawler->filter('h1')->each(function ($node) {
            return $node->text();
        });
        $chapo = $crawler->filter('.chapo')->each(function ($node) {
            return $node->text();
        });

        print_r($result[0]);
        echo "<br />";
        print_r($chapo[0]);

        // replace this example code with whatever you need
        return $this->render('base.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ));
    }
}
