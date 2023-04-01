import PocketBase from 'pocketbase';

let api = {
    url: import.meta.env.PB_URL
};

const client = new PocketBase('http://127.0.0.1:8090');
client.autoCancellation(false);

export default client;