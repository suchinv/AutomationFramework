import { test, expect } from '@playwright/test';
import { error } from 'console';


const { registerPage } = require('../eShop/regestration_page');
test('test', async ({ page }) => {
  const regPage = new registerPage(page);
  await regPage.gotoApp();
  await regPage.clickOnUserCreation();
  await regPage.userCreateAcont();
});