export const handler = async (event) => {
    console.log('Received event:', event);

    let requestBody;
    try {
        requestBody = event.body ? JSON.parse(event.body) : {};

        console.log("requestBody: ", requestBody);

    } catch (error) {
        console.error('Error parsing request body:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid request body' })
        };
    }

    const responseMessage = `Processed successfully`;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: responseMessage })
    };
};