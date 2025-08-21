export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Terms & Privacy</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Last updated: Aug 20, 2025
        </p>
      </header>

      <div className="prose prose-lg max-w-4xl mx-auto text-foreground">
        <h2 className="text-3xl font-bold">Terms of Service</h2>
        <p>
          Welcome to FastyCommerce . By accessing or using our website, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, then you may not access the service.
        </p>
        <p>
          <strong>1. Accounts:</strong> When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
          <strong>2. Intellectual Property:</strong> The Service and its original content, features, and functionality are and will remain the exclusive property of FastyCommerce Lite and its licensors.
        </p>

        <h2 className="text-3xl font-bold mt-12">Privacy Policy</h2>
        <p>
          Your privacy is important to us. It is FastyCommerce's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        <p>
          <strong>1. Information we collect:</strong> We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        </p>
        <p>
          <strong>2. How we use your information:</strong> We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, and understand and analyze how you use our website.
        </p>
        <p>
          <strong>3. Security:</strong> We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>
      </div>
    </div>
  );
}
