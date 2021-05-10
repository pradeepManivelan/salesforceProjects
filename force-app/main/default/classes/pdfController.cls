public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        Pagereference page = Page.renderAsPDF;
        page.getParameters().put('pdfText',htmlData);
        Contact contact1 = new Contact(Id=recordId);
        Attachment objAttachment = new Attachment();
        objAttachment.Name = 'invoice.pdf';
        objAttachment.ParentId = contact1.Id;
        objAttachment.Body = page.getContentaspdf();
        objAttachment.IsPrivate = false;
        insert objAttachment;
        return objAttachment;
    }
}
