<?php

namespace App\Controller;

use App\Repository\JobRepository;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ExperienceController extends AbstractController
{
    #[Route('/experience', name: 'app_experience')]
    public function index(JobRepository $job): JsonResponse
    {
        return $this->json([
            'message' => $job->findAll(),
        ]);
    }
}
