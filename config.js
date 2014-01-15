module.exports =  {

    ////////////////////////////////////
    // ElasticSearch Backend Settings
    ////////////////////////////////////
    "es_host": process.env.ES_HOST || "localhost",  // The host of Elastic Search
    "es_port": process.env.ES_PORT || 9200,  // The port of Elastic Search
    "es_using_ssl": (typeof process.env.ES_SSL === "undefined") ? false : process.env.ES_SSL,  // If the ES is using SSL(https)?
    "es_username":  process.env.ES_USERNAME || "",  // The basic authentication user of ES server, leave it blank if no basic auth applied
    "es_password":  process.env.ES_PASSWORD || "",  // The password of basic authentication of ES server, leave it blank if no basic auth applied.


    ////////////////////////////////////
    // Proxy server configurations
    ////////////////////////////////////
    // Which port listen to
    "listen_port": process.env.PORT || 9999,
    // Enable SSL protocol
    "enable_ssl_port": false,
        // The following settings are valid only when enable_ssl_port is true
        "listen_port_ssl": 4443,
        // Use absolute path for the key file
        "ssl_key_file": "POINT_TO_YOUR_SSL_KEY",
        // Use absolute path for the certification file
        "ssl_cert_file": "POINT_TO_YOUR_SSL_CERT",
    // The ES index for saving kibana dashboards
    // default to "kibana-int"
    // We are planning a feature that saving kibana dashboard and settings to individual
    // indices of ElasticSearch for different users.
    // That is to say, every users can save and use their own customized kibana dashboards
    // without affecting others.
    // if you are really dying for this feature submit a github issue
    "kibana_es_index": "kibana-int",


    ////////////////////////////////////
    // Security Configurations
    ////////////////////////////////////
    // Cookies secret
    // Please change the following secret randomly for security.
    "cookie_secret": "lkasdfljasdof ij ofijaskl jflaj9j3029f0j203 029j2j f2ij3f023jf23f23",


    ////////////////////////////////////
    // Kibana3 Authentication Settings
    // Currently we support 3 different auth methods: Google OAuth2, Basic Auth and CAS SSO.
    // You can use one of them or both
    ////////////////////////////////////


    // =================================
    // Google OAuth2 settings
    // Enable? true or false
    // When set to false, google OAuth will not be applied.
    "enable_google_oauth": true,
        // We use the following redirect URI:
        // http://YOUR-KIBANA-SITE:[listen_port]/auth/google/callback
        // Please add it in the google developers console first.
        // The client ID of Google OAuth2
        "client_id": process.env.GOOGLE_CLIENT_ID || "",
        "client_secret": process.env.GOOGLE_CLIENT_SECRET || "",  // The client secret of Google OAuth2
        "allowed_emails": ["*@clipppr.com"],  // An emails list for the authorized users


    // =================================
    // Basic Authentication Settings
    // The following config is different from the previous basic auth settings.
    // It will be applied on the client who access kibana3.
    // Enable? true or false
    "enable_basic_auth": false,
        // Multiple user/passwd supported
        // The User&Passwd list for basic auth
        "basic_auth_users": [
            {"user": "user", "password": "pass"},
            {"user": "demo1", "password": "pwd2"},
        ],


    // =================================
    // CAS SSO Login
    // Enable? true or false
    "enable_cas_auth": false,
        // Point to the CAS authentication URL
        "cas_server_url": "https://point-to-the-cas-server/cas",

};
