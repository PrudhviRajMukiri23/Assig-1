class RequestsSpec {

    async get(url, request) {
        try {
            return await request.get(url);
        } catch (error) {
            throw new Error(`GET request failed for ${url}: ${error.message}`);
        }
    }

    async post(url, request) {
        try {
            return await request.post(url, {
                headers: { 'content-type': 'application/json' },
                data: JSON.stringify({
                    "name": "morpheus",
                    "job": "leader"
                })
            });
        } catch (error) {
            throw new Error(`POST request failed for ${url}: ${error.message}`);
        }
    }

    async put(url, request) {
        try {
            return await request.put(url, {
                headers: { 'content-type': 'application/json' },
                data: JSON.stringify({
                    "name": "morpheus",
                    "job": "zion resident"
                })
            });
        } catch (error) {
            throw new Error(`PUT request failed for ${url}: ${error.message}`);
        }
    }

    async delete(url, request) {
        try {
            return await request.delete(url);
        } catch (error) {
            throw new Error(`DELETE request failed for ${url}: ${error.message}`);
        }
    }
}

exports.RequestsSpec = RequestsSpec;
