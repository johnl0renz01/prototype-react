var MY_API_KEY = (function () {
    const CHATGPT_API_KEY = '4c703d05c2msh158318bd35bbfbfp11a9a6jsne1fd6658989b';

    var getGPT_KEY = function () {
        return CHATGPT_API_KEY;
    };
    
    return {
        getGPT_KEY: getGPT_KEY
    }

})();

export default MY_API_KEY;
