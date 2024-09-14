# Secure API Gateway with AWS SAM

This project implements a secure API Gateway using AWS SAM (Serverless Application Model). The template is designed with minimal security requirements, making it suitable for production environments. It incorporates AWS best practices for secure and scalable architectures while allowing for further enhancements, such as the analysis of received objects (e.g., logs, data) for better visibility and monitoring.

## Features

- **API Gateway**: Secure API Gateway endpoint with required API Key authentication.
- **AWS WAF (Web Application Firewall)**: Protects against common attacks like SQL Injection and Cross-Site Scripting (XSS) and includes rate-limiting to prevent Denial of Service (DoS) attacks.
- **Lambda Function**: Processes incoming API requests, follows the principle of least privilege with a custom IAM Role, and includes structured logging for efficient analysis.
- **Usage Plans**: Controls traffic to the API by limiting request rates and monitoring API consumption by clients.
- **Future Expansion**: Considerations for enhanced data analysis using Amazon S3, Athena, and CloudWatch Dashboards.

## Architecture Overview

This SAM template sets up the following components:

1. **API Gateway**: Manages HTTP requests and requires an API Key for access.
2. **AWS WAFv2**: Applies security rules, including rate-limiting and protection against common web application attacks.
3. **AWS Lambda**: Handles the logic for processing API requests.
4. **CloudWatch Logs**: Stores Lambda logs with a retention period of 90 days for structured analysis and long-term storage.
5. **Amazon S3 & Athena (Future Considerations)**: Optionally store and query received objects (logs, data) for advanced analysis and cost efficiency.

## Installation

To deploy this API Gateway with minimal security configurations, you can follow these steps:

### Prerequisites

- AWS CLI installed and configured with proper IAM permissions.
- AWS SAM CLI installed ([Installation guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)).
- A valid API Key for accessing the API once deployed.

### Deployment Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/secure-api-gateway.git
    cd secure-api-gateway
    ```

2. **Build the project**:
    ```bash
    sam build
    ```

3. **Deploy the project**:
    ```bash
    sam deploy --guided
    ```
    Follow the prompts to configure the deployment. Ensure you specify a unique stack name and the AWS region where the resources will be deployed.

4. **Outputs**: Once deployed, the API Gateway URL and the required API Key will be displayed. Make sure to store the API Key securely as it will be needed to access the API.

## Usage

After deploying the API, you can test the endpoint with an API client (e.g., Postman) by using the API Gateway URL and the API Key in the request headers.

Example:

```bash
curl -X GET https://your-api-id.execute-api.your-region.amazonaws.com/prod/your-endpoint \
  -H "x-api-key: your-api-key"
