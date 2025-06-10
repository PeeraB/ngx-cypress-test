const { onDatePickerPage } = require("../support/page_objects/datePickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { onNagivationPage, navigateTo } = require("../support/page_objects/navigationPage")

describe('Test with Page object', () => {
    beforeEach('open app', () => {
        cy.visit('/')
    })

    it('verify navigate across page', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it('should submit inline and select date in calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem','test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('tes@test.com','password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7,14)
    })

})