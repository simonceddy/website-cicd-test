import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

function Contact({ children }) {
  return (
    <PageLayout>
      <PageTitle>
        Contact
      </PageTitle>
      {children}
    </PageLayout>
  );
}

export default Contact;
