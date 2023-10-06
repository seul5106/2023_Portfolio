import { FC } from 'react';
import { ProjectItemPageHeader } from './ProjectItemPageHeader';
import styled from 'styled-components';

interface ProjectItemPageLayoutProps {
  children: React.ReactNode;
  label: string;
}

export const ProjectItemPageLayout: FC<ProjectItemPageLayoutProps> = ({
  children,
  label,
}) => {
  return (
    <PageContainer>
      <ProjectItemPageHeader label={label} />
      <div className="p-4">{children}</div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: calc(100vh - 60px);
`;
