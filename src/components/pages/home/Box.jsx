import React from 'react'
import '../../css/tailwind.css';

export default function Box() {

    const mapImageAll = [
        {
            id: 1,
            img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg",
            img2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg',
            img3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg',
            img4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg',
            name: 'School From Home | Online classes made easy'
        },
        {
            id: 2,
            img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg",
            name: 'Pay with Credit Card'
        },
        {
            id: 3,
            img: "https://m.media-amazon.com/images/I/41VDUqScJFL._AC_SY200_.jpg",
            name: 'Routers'
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg",
            img2: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg',
            img3: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg',
            img4: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg',
            name: 'Give your Cloths a makeover'
        },
        {
            id: 5,
            img: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Zeitgeist/Summerstore/GW/Summer-PC-CC-1-1X._SY304_CB656851921_.jpg",
            name: 'Welcome this summer in style'
        },
        {
            id: 6,
            img: "https://m.media-amazon.com/images/I/51iZYfOg4+L._AC_SY200_.jpg",
            name: 'Hp Monitors'
        },
        {
            id: 7,
            img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/QC--Enabled-devices--brownie_1X._SY116_CB660147049_.jpg",
            img2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/MSO_Nov/Dashboard-QC-Card_306x2501X._SY116_CB416939941_.jpg',
            img3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroFeb21/Dashboard-QC-Card_1X._SY116_CB668010181_.jpg',
            img4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO-MAY/04_Dashboard-QC-Card_1xc._SY116_CB432126530_.jpg',
            name: 'Alexa enabled devices & more'
        },
        {
            id: 8,
            img: "https://images-eu.ssl-images-amazon.com/images/I/613a-3jtieL._AC_UL160_SR160,160_.jpg",
            name: 'Mouses'
        },
    ]
    return (
        <div className='w-full mt-2 transform md:-translate-y-24'>
            <div className="container mx-auto flex justify-center flex-wrap">
                {
                    mapImageAll.map((box, index) => (
                        <div className="flex flex-col bg-white lg:w-96 w-full  justify-center p-4 rounded m-3" key={index}>
                            <h1 className='text-black px-5 text-md font-light text-center'>{box.name}</h1>
                            <div className="flex flex-wrap p-3 justify-center">
                                {box.img2 ?
                                    <div className='w-full flex flex-wrap justify-center'>
                                        <img className='lg:w-32  sm:w-4/12 w-5/12 sm:m-2 m-1' src={box.img} alt="" />
                                        <img className='lg:w-32  sm:w-4/12 w-5/12 sm:m-2 m-1' src={box.img2} alt="" />
                                        <img className='lg:w-32  sm:w-4/12 w-5/12 sm:m-2 m-1' src={box.img3} alt="" />
                                        <img className='lg:w-32  sm:w-4/12 w-5/12 sm:m-2 m-1' src={box.img4} alt="" />
                                    </div>
                                    :
                                    <img className='lg:w-64 w-70' src={box.img} alt="" />
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
