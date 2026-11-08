import {test,expect} from '@playwright/test'

test('Practice Test1',async({page}) => {
    console.log('Starting Practice Test1');
    await page.goto('https://www.saucedemo.com/');
    console.log(await page.title());
    expect(page).toHaveTitle('Swag Labs');
    console.log('Ending Practce Test1')
});
test('Practice Test2', async({page}) => {
    console.log('Starting Practice Test2');
    await page.goto('https://www.saucedemo.com/');
    console.log(await page.title());
    expect(page).toHaveTitle('Swag Labs');
    console.log('Ending Practce Test2')
})
test('Practice Test3', async({page}) => {
    console.log('Starting Practice Test3');
    await page.goto('https://www.saucedemo.com/');
    console.log(await page.title());
    expect(page).toHaveTitle('Swag Labs');
    console.log('Ending Practce Test3')
})
test('Practice Test4', async({page}) => {
    console.log('Starting Practice Test4');
    await page.goto('https://www.saucedemo.com/');
    console.log(await page.title());
    expect(page).toHaveTitle('Swag Labs Wrong');
    console.log('Ending Practce Test4')
})