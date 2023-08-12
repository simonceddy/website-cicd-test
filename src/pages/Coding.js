import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

function Coding({ children }) {
  return (
    <PageLayout>
      <PageTitle>
        Coding
      </PageTitle>
      {children}
    </PageLayout>
  );
}

export default Coding;
