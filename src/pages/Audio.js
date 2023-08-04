import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

function Audio({ children }) {
  return (
    <PageLayout>
      <PageTitle>
        Audio
      </PageTitle>
      {children}
    </PageLayout>
  );
}

export default Audio;
