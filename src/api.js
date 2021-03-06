// // This function takes an events array, then uses map to create a new array with only locations.
// // It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
// // The set will remove al duplicates from the array.

import { mockData } from "./mock-data";
import axios from 'axios';
import NProgress from 'nprogress';


export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
    .then((res) => res.json())
    .catch((error) => error.json());

    return result;
};

const getToken = async (code) => {
    const encodeCode = encodeURIComponent(code);
    const { access_token } = await fetch(
        `https://o1k84bi5nl.execute-api.eu-west-3.amazonaws.com/dev/api/token/${encodeCode}`
    )
        .then((res) => {
            return res.json();
        })
        .catch((error) => error);

    access_token && localStorage.setItem('access_token', access_token);

    return access_token;
};

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem('access_token');
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get('code');
        if (!code) {
            const results = await axios.get(
                'https://o1k84bi5nl.execute-api.eu-west-3.amazonaws.com/dev/api/get-auth-url', {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl);
        }
        return code && getToken(code);
    }
    return accessToken;
};



// export const getEvents = async () => {
    
//     if (window.location.href.startsWith('http://localhost')) {
//         console.log('mockData for localhost');
//         return mockData;
//     }

//     if (!navigator.onLine) {
//         console.log('Im offline');
//         const data = await localStorage.getItem("lastEvents");
//         console.log(data + ' this is data');
//         // NProgress.done();
//         return data ? JSON.parse(data).events : [];
//     }

//     const token = await getAccessToken();
//     console.log('access token' + token);

//     if (token) {
//         removeQuery();
//         const url = ` https://o1k84bi5nl.execute-api.eu-west-3.amazonaws.com/dev/api/get-events/${token}`;
//         console.log('URL is - ' + url);
//         const result = await axios.get(url, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*'
//             }
//         });
//         console.log(result.data + ' THIS IS RESULT DATA');
//         console.log(result.data.events + ' THIS IS RESULT DATA EVENTS')
//         if (result.data) {
//             var locations = extractLocations(result.data.events);
//             localStorage.setItem('lastEvents', JSON.stringify(result.data));
//             localStorage.setItem('locations', JSON.stringify(locations));
//         }
//         return result.data.events;
//     }

// };

export const getEvents = async () => {
    return mockData;
}

const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
        var newurl =
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname;
            window.history.pushState('', '', newurl);
    } else {
        newurl = 
            window.location.protocol + '//' + 
            window.location.host;
            window.history.pushState('', '', newurl);
    }
};


