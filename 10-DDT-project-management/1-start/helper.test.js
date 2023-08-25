const puppeteer = require('puppeteer')

const helper = require ('./helper')

test('should return false because input is empty', () => {
    const result = helper.validator('fgfgfg', true, true)
    expect(result).toBe(false)
})

test('should return true', () => {
    const result = helper.validator('ahmad', false, true)
    expect(result).toBe(true)
})

test('should return false because input is not a number', () => {
    const result = helper.validator('ahmad', true, true)
    expect(result).toBe(false)
})

test('should return [user name is ahmad ,and the age is 33]', () => {
    const result = helper.joiner('ahmad', '33')
    expect(result).toBe('user name is ahmad ,and the age is 33')

})


test('chould show element after adding right data and click the button', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:5500/index.html')
    await page.click('input#userNameInp')
    await page.type('input#userNameInp', 'Ahmad')
    await page.click('input#ageInp')
    await page.type('input#ageInp', '34')
    await page.click('button#addBtn')
    const textResult = await page.$eval('#userList', el => el.textContent)
    expect(textResult).toBe('user name is Ahmad ,and the age is 34')
}, 50000)