import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

function Music({ children }) {
  return (
    <PageLayout>
      <PageTitle>
        Music
      </PageTitle>
      {children}
    </PageLayout>
  );
}

export default Music;
