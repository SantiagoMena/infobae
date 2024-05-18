// Config dummy api
const config = {
    baseURL: process.env.NEXT_PUBLIC_DUMMY_API_URL,
    headers: {"app-id": process.env.NEXT_PUBLIC_DUMMY_APP_ID},
};

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
    const configValue = config[key] + "";
    if (configValue.charAt(0) === '"') {
        config[key] = configValue.substring(1, configValue.length - 1);
    }
});

export const dummyApiConfig = config