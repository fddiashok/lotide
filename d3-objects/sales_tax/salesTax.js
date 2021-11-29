const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];
const sumOfSales = function (array) {
  let sum = 0;
  for (let item of array) {
    sum = sum + item;
  }
  return sum;
}
const calculateSalesTax = function (salesData, taxRates) {
  // Implement your code here
  //calulate sum of sales on a company specific to a province

  for (let i = 0; i < companySalesData.length; i++) {
    companySalesData[i]['sales'] = sumOfSales(companySalesData[i]['sales']);
  }
  // console.log(companySalesData);

  //caculate total sales across  
  for (let item of companySalesData) {
    if (item['province'] === 'AB') {
      item['taxes'] = item['sales'] * 0.05;

    } else if (item['province'] === 'BC') {
      item['taxes'] = item['sales'] * 0.12;

    } else if (item['province'] === 'SK') {
      item['taxes'] = item['sales'] * 0.10;

    }

  }
  // console.log(companySalesData);
  const object = {};
  for (let j = 0; j < companySalesData.length; j++) {
    const salesData = companySalesData[j];
    // console.log(salesData);
    /*{ name: 'Telus', province: 'BC', sales: 700, taxes: 84 }
{ name: 'Bombardier', province: 'AB', sales: 800, taxes: 40 }
{ name: 'Telus', province: 'SK', sales: 600, taxes: 60 }*/
    const companyName = salesData.name;
    const companySale = salesData.sales;
    const taxes = salesData.taxes;
    if (object[companyName]) {
    object[companyName]['totalSales']+=companySale;
    object[companyName]['totalTaxes']+=taxes;
    } else {
      object[companyName]={totalSales:companySale, totalTaxes: taxes}
      
    }
    
  }
  console.log(object);
}

calculateSalesTax(companySalesData, salesTaxRates);

/* EXPECTED RESULTS

{
  Telus: {
    totalSales:1300,
    totalTaxes:144
  },
  Bombardier{
    totalSales:800,
    totalTaxes:40
  }
}
*/