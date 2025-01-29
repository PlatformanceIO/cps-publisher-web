'use server';

import { z } from 'zod';

const joinWaitlistSchema = z.object({
  email: z.string().email(),
});

interface WaitlistMessages {
  errors?: {
    email?: string[];
  };
  data?: {
    success?: boolean;
  };
}

export async function joinWaitlist(
  formStatus: WaitlistMessages,
  formData: FormData
): Promise<WaitlistMessages> {
  const email = formData.get('email') as string;
  const result = joinWaitlistSchema.safeParse({
    email,
  });

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return {
      errors,
    };
  }

  try {
    const response = await fetch(
      `${process.env.CORE_API_URL}/v1/users/waitlist`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          product: 'cps-publisher',
        }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    return { data: { success: true } };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Failed to create task');
    }
  }
}
