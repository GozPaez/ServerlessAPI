Secure API Gateway with AWS SAM

This project implements a secure API Gateway using AWS SAM (Serverless Application Model). The template is designed with minimal security requirements, making it suitable for production environments. It incorporates AWS best practices for secure and scalable architectures while allowing for further enhancements, such as the analysis of received objects (e.g., logs, data) for better visibility and monitoring.
Features

    API Gateway: Secure API Gateway endpoint with required API Key authentication.
    AWS WAF (Web Application Firewall): Protects against common attacks like SQL Injection and Cross-Site Scripting (XSS) and includes rate-limiting to prevent Denial of Service (DoS) attacks.
    Lambda Function: Processes incoming API requests, follows the principle of least privilege with a custom IAM Role, and includes structured logging for efficient analysis.
    Usage Plans: Controls traffic to the API by limiting request rates and monitoring API consumption by clients.
    Future Expansion: Considerations for enhanced data analysis using Amazon S3, Athena, and CloudWatch Dashboards.

Architecture Overview

This SAM template sets up the following components:

    API Gateway: Manages HTTP requests and requires an API Key for access.
    AWS WAFv2: Applies security rules, including rate-limiting and protection against common web application attacks.
    AWS Lambda: Handles the logic for processing API requests.
    CloudWatch Logs: Stores Lambda logs with a retention period of 90 days for structured analysis and long-term storage.
    Amazon S3 & Athena (Future Considerations): Optionally store and query received objects (logs, data) for advanced analysis and cost efficiency.

Installation

To deploy this API Gateway with minimal security configurations, you can follow these steps:
Prerequisites

    AWS CLI installed and configured with proper IAM permissions.
    AWS SAM CLI installed (Installation guide).
    A valid API Key for accessing the API once deployed.

Deployment Steps

    Clone the repository:

    bash

git clone https://github.com/your-repo/secure-api-gateway.git
cd secure-api-gateway

Build the project:

bash

sam build

Deploy the project:

bash

    sam deploy --guided

    Follow the prompts to configure the deployment. Ensure you specify a unique stack name and the AWS region where the resources will be deployed.

    Outputs: Once deployed, the API Gateway URL and the required API Key will be displayed. Make sure to store the API Key securely as it will be needed to access the API.

Usage

After deploying the API, you can test the endpoint with an API client (e.g., Postman) by using the API Gateway URL and the API Key in the request headers.

Example:

bash

curl -X GET https://your-api-id.execute-api.your-region.amazonaws.com/prod/your-endpoint \
  -H "x-api-key: your-api-key"

Security Features

    AWS WAFv2: Rate limiting (1000 requests in 5 minutes per IP) and protection against SQL Injection and XSS attacks.
    IAM Role: The Lambda function is assigned a custom IAM Role with the least privileges necessary to perform its tasks.
    API Keys: Ensures that only authorized clients can access the API.

Future Considerations

We are exploring the option of storing received objects (such as logs or other data) in Amazon S3, to be queried later using Amazon Athena. This would enable advanced analysis while maintaining a cost-effective approach. Additionally, CloudWatch Dashboards may be used for real-time monitoring and detailed analysis of the objects processed by the API.
License

This project is licensed under the MIT License. See the LICENSE file for more details.
Conclusion

This SAM template provides a secure, scalable API Gateway with minimal security requirements for production environments. It follows AWS best practices and can be easily extended with more advanced features like enhanced data analysis and monitoring.