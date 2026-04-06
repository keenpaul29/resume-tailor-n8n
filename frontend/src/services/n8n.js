/**
 * n8n Webhook Service
 * Handles communication with the n8n resume tailor workflow.
 */

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

/**
 * Triggers the n8n resume tailoring workflow.
 * @param {File} resumeFile - The master resume PDF file.
 * @param {string} jobDescription - The target job description text.
 * @param {boolean} isMock - Whether to simulate the response for demo purposes.
 * @returns {Promise<Object>} - The n8n response or mock data.
 */
export const triggerTailorWorkflow = async (resumeFile, jobDescription, isMock = false) => {
    // If mock mode is enabled or webhook URL is missing, simulate the process
    if (isMock || !N8N_WEBHOOK_URL) {
        console.warn('RESUME.INTEL // INITIATING_MOCK_PROTOCOL');
        
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, 2000));

        return {
            status: 'success',
            match_score: 94,
            optimization_delta: [
                'Converted passive voice verbs to high-impact action-oriented syntax.',
                'Quantified technical impact with verifiable data-points.'
            ],
            tailored_resume_url: '#mock-pdf-url',
            original_summary: 'Responsible for managing a team and handling various software development projects...',
            optimized_summary: 'Orchestrated cross-functional squads of 12 engineers to deliver Enterprise SaaS solutions...',
            keywords: ['Scalability', 'Kubernetes', 'CI/CD Pipeline', 'Agile Lead']
        };
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobDescription);

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`SYSTEM_ERROR // HTTP_${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('RESUME.INTEL // UPLINK_FAILURE:', error);
        throw error;
    }
};
