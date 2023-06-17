import Izraz from "../models/izraz";

export const IZRAZI = [
    new Izraz('eng', 'obitelj', 'pocetnik', [['Parents','Roditelji'], ['Mother', 'Majka'], ['Father', 'Otac']]),
    new Izraz('eng', 'obitelj', 'posjeduje', 'Relative', 'Rodbina'),
    new Izraz('eng', 'posao', 'pocetnik', 'Co-worker', 'Suradnik'),
    new Izraz('eng', 'posao', 'posjeduje', 'Contributor', 'Suradnik'),
    new Izraz('eng', 'hobi', 'pocetnik', 'Fun', 'Zabava'),
    new Izraz('eng', 'hobi', 'posjeduje', 'Entertainment', 'Zabava'),
    new Izraz('eng', 'ostalo', 'pocetnik', 'Other', 'Drugo'),
    new Izraz('eng', 'ostalo', 'posjeduje', 'Rest', 'Ostatak'),
]