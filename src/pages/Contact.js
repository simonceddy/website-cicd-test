import PageContent from '../components/PageContent';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

function Contact() {
  return (
    <PageLayout>
      <PageTitle>
        Contact
      </PageTitle>
      <PageContent>
        <div className="row justify-start items-center">
          <span
            className="mr-2 font-bold"
          >
            Email:
          </span>
          <a
            className="hover:underline text-teal-700 dark:text-red-300 font-bold font-mono text-lg"
            href="mailto:simon@simoneddy.com.au"
          >
            simon@simoneddy.com.au
          </a>
        </div>
      </PageContent>
    </PageLayout>
  );
}

export default Contact;
