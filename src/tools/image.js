/**
 * Created by pdd on 2018/7/6.
 */

import upyun from 'upyun';


export function upload(file, cb) {
    const path = '/sample-upload-' + file.name;
    // client side only need bucket name
    const bucket = new upyun.Bucket('sy-image-upyun');
    function getHeaderSign(bucket, method) {
        const params = 'bucket=' + bucket.bucketName + '&method=' + method + '&path=' + path;
        return fetch('http://localhost:7001/patrol/image/sign/head?' + params)
            .then(function(response) {
                if (response.status !== 200) {
                    console.error('gen header sign faild!');
                    return;
                }
                return response.json()
            })
    }
    const client = new upyun.Client(bucket, getHeaderSign);
    client.putFile(path, file).then(function(result) {
        const res = `http://sy-image-upyun.test.upcdn.net/${path}`;
        cb({ code: result?0:-1, data: res });
    });
}