export class JobApplicationResponseDto {
  applicationId: string;

  candidateId: string;

  fullName: string;

  email: string;

  phone: string;

  resumeUrl: string | null;

  overallScore: number | null;

  cvScore: number | null;

  interviewScore: number | null;

  recommendation: string | null;

  summary: string | null;

  status: string;

  appliedAt: Date;
}
