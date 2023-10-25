import { useEffect, useState } from "react";

const useDateFixture = (dt) => {

    const [formatedTime, setFormatedTime] = useState('');
    useEffect(() => {
        let time = '';
        let suffix = '';
        const x = new Date(dt);
        const date = new Date(x);

        const fixedZero = (value) => {
            if (value < 10) {
                return '0' + value;
            }
            return value;
        }

        time += fixedZero(date.getDay()) + '/' + fixedZero(date.getMonth()) + '/' + date.getFullYear() + ' ';

        if (date.getHours() > 12) {
            suffix = 'PM';
            time += fixedZero(date.getHours() - 12);
        }
        else {
            time += fixedZero(date.getHours());
            suffix = 'AM';
        }
        time += ':' + fixedZero(date.getUTCMinutes()) + suffix;
        setFormatedTime(time);
    }, [dt]);

    return [formatedTime];
}

export default useDateFixture;