import http from 'k6/http'
import { check, sleep } from 'k6'
import { vu } from 'k6/execution'

export const options = {
    scenarios: {
        projects: {
            exec: 'projects',
            executor: 'constant-arrival-rate',
            rate: 1,
            timeUnit: '1s',
            duration: '30s',
            preAllocatedVUs: 25,
        },
    },
};

export function projects() {
    const res = http.get('https://www.polestar.com/se/test-drive/booking/ps4/')
    sleep(1)
    //console.log(res.status)
    check(res, {'is success 200':(r)=>r.status===200},{ status: res.status })
}

