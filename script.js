

let bank = [
    {
        name: "ruxshona beaty salon",
        budget: 30000,
        tax: 12,
        expensesPerYear: [
            {
                title: 'rent',
                total: 6000
            },
            {
                title: 'others',
                total: 7000
            },
            {
                title: 'ads',
                total: 2000
            }
        ]
    },
    {
        name: "emin nosfrush",
        budget: 5000,
        tax: 10,
        expensesPerYear: [
            {
                title: 'rent',
                total: 300
            }
        ]
    },
    {
        name: "akva mashennik",
        budget: 80000,
        tax: 15,
        expensesPerYear: [
            {
                title: 'rent',
                total: 6500
            },
            {
                title: 'ads',
                total: 3000
            },
            {
                title: 'others',
                total: 10000
            }
        ]
    },
    {

        name: "Shoxrux",
        budget: 40000,
        tax: 12,
        expensesPerYear: [
            {
                title: 'rent',
                total: 5000
            },
            {
                title: 'ads',
                total: 4000
            },
            {
                title: 'others',
                total: 7000
            }
        ]
    }
]

let neudachniye = []
let udachniye = []
let totalTax
for(let item of bank) {
    let wholeExpenses
    item.totalExp
    item.taxExp = (item.budget / item.tax) / 12
    totalTax = bank.reduce((a, b) => a.taxExp > b.taxExp ? a : b)
    let result
    for(let exp of item.expensesPerYear) {
        // wholeExpenses += exp.total
        wholeExpenses = item.expensesPerYear.reduce((a, b) => a + b.total, 0)
        item.totalExp = wholeExpenses + item.taxExp
        result = (item.budget - item.totalExp) / 12
    }
    // console.log(item.taxExp);
    if(result >= 0) {
        udachniye.push(item)
    } else {
        neudachniye.push(item)
    }
    // console.log(result)
    console.log(item.totalExp) // 2
}
console.log(totalTax) // 1
console.log(udachniye, neudachniye); // 3
// 1. Найти кто больше всех платит налог
// 2. Создать новый ключ компаниям (процент) Найти соотношение трат и сохранить его в новом ключе
// 3. Вычитав все расходы включая налоги определить куда пушается компания в уд или не удачные если денег остается больше 0 то в уд меньше (не удачные)