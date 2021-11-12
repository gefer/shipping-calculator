/*
Calcular o valor do frete de um pedido baseado na faixa de cep por região.
Considere as seguintes faixas:

Regiã Sudeste: Ceps que começam com 0, 1, 2 ou 3.
Região Nordeste: Ceps que começam com 4 ou 5.
Região Norte: Ceps que começam com 6.
Regiã Centro Oeste: Ceps que começam com 7.
Regiã Sul: Ceps que começam com 8 e 9.

Frete grátis

Pedido > 299,00 : Sul e Sudeste
Pedido > 399,00 : Centro Oeste
Pedido > 499,00 : Norte e Nordeste

Pedidos com valores menores que o mínimo para frete grátis

Sul/Sudeste: 8% do total
Centro-Oeste: 12% do total
Norte/Nordeste: 15% do total
*/

//Regions
const SOUTHEAST = [0, 1, 2, 3];
const NORTHEAST = [4, 5];
const NORTH = [6];
const MIDWEAT = [7];
const SOUTH = [8, 9];

//Values
const SOUTH_AND_SOUTHEAST_VALUE = 299.00;
const MIDWEAT_VALUE = 399.00;
const NORTH_AND_NORTHEAST_VALUE = 499.00;

//Shipping price
const SOUTH_AND_SOUTHEAST_PERCENT = 0.08;
const MIDWEAT_PERCENT = 0.12;
const NORTH_AND_NORTHEAST_PERCENT = 0.15;

const calculate = function (orderTotal, cep) {
    if ((isSouth(cep) || isSoutheast(cep)) && orderTotal < SOUTH_AND_SOUTHEAST_VALUE) return calculateShippingValue(orderTotal, SOUTH_AND_SOUTHEAST_PERCENT);
    if (isMidweat(cep) && orderTotal < MIDWEAT_VALUE) return calculateShippingValue(orderTotal, MIDWEAT_PERCENT);
    if ((isNorth(cep) || isNortheast(cep)) && orderTotal < NORTH_AND_NORTHEAST_VALUE) return calculateShippingValue(orderTotal, NORTH_AND_NORTHEAST_PERCENT);

    return 0.00;
};

const calculateShippingValue = function (value, percent) {
    return value * percent;
};

const isSoutheast = function (cep) {
    return isItInRegion(SOUTHEAST, cep);
};

const isNortheast = function (cep) {
    return isItInRegion(NORTHEAST, cep);
};

const isNorth = function (cep) {
    return isItInRegion(NORTH, cep);
};

const isMidweat = function (cep) {
    return isItInRegion(MIDWEAT, cep);
};

const isSouth = function (cep) {
    return isItInRegion(SOUTH, cep);
};

const isItInRegion = function (region, cep) {
    return region.find((el) => cep.startsWith(el));
};

