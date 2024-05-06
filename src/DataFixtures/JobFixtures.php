<?php

namespace App\DataFixtures;

use App\Entity\Job;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class JobFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $job = new Job();
        $job->setStart(new \DateTime('2010-01-01'));
        $job->setFinish(new \DateTime('2011-01-01'));
        $job->setTitle('Web Developer');
        $job->setCompany('Google');
        $job->setDescription('Developed web applications using PHP, MySQL, HTML, CSS, and JavaScript.');
        
        
        $manager->persist($job);
        $manager->flush();
    }
}
