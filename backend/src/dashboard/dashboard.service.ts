import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) {}

    async getSummary(managerId: string) {
  const jobs = await this.prisma.job.count({
    where: {
      managerId,
    },
  });

  const applications = await this.prisma.application.findMany({
    where: {
      job: {
        managerId,
      },
    },

    select: {
      status: true,
      aiScore: {
        select: {
          overallScore: true,
        },
      },
    },
  });

  const summary = {
    activeJobs: jobs,

    totalApplications: applications.length,

    pendingApplications: 0,

    shortlisted: 0,

    interviewsScheduled: 0,

    interviewsCompleted: 0,

    offers: 0,

    hired: 0,

    rejected: 0,

    averageAIScore: 0,
  };

  let totalScore = 0;
  let scoredCandidates = 0;

  for (const application of applications) {
    switch (application.status) {
      case 'PENDING':
        summary.pendingApplications++;
        break;

      case 'SHORTLISTED':
        summary.shortlisted++;
        break;

      case 'INTERVIEW_SCHEDULED':
        summary.interviewsScheduled++;
        break;

      case 'INTERVIEW_COMPLETED':
        summary.interviewsCompleted++;
        break;

      case 'OFFERED':
        summary.offers++;
        break;

      case 'HIRED':
        summary.hired++;
        break;

      case 'REJECTED':
        summary.rejected++;
        break;
    }

    if (application.aiScore) {
      totalScore += application.aiScore.overallScore;
      scoredCandidates++;
    }
  }

  summary.averageAIScore =
    scoredCandidates === 0
      ? 0
      : Number((totalScore / scoredCandidates).toFixed(2));

  return summary;
}
}
