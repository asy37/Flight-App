import car  from '../../../assets/car.jpg'
import hotel  from '../../../assets/hotel.jpg'
import travel  from '../../../assets/travel.jpg'

interface VacationImage {
    id: number;
    src: string;
    alt: string;
}

export const vacationImages: VacationImage[] = [
    {
        id: 1,
        src: car,
        alt: "Tatil Yeri 1",
    },
    {
        id: 2,
        src: hotel,
        alt: "Tatil Yeri 2",
    },
    {
        id: 3,
        src: travel,
        alt: "Tatil Yeri 3",
    },
];
