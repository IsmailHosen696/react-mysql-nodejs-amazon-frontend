import { useEffect, useState } from 'react'

export default function UseSlider(count) {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        const slider_image = [
            {
                id: 1,
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Test/Nord_1500x600-revised-price._CB665479609_.jpg'
            },
            {
                id: 2,
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/latestLaunches_june21/Latestlaunches_Gw_1500x600._CB665305122_.jpg'
            },
            {
                id: 3,
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/SBD-Teaser-WebHero-1X._CB665230624_.jpg'
            },
            {
                id: 4,
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/June/bank/new/PC-Bunk-SS_1500._CB665104793_.jpg'
            }
        ];

        setPhoto(slider_image[count]);
    }, [count]);

    return photo;
}
