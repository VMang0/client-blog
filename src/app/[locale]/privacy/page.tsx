import { PrivacyContent } from '@components/sections/privacy/PrivacyContent';
import { PrivacyHeading } from '@components/sections/privacy/PrivacyHeading';

export const dynamic = 'force-static';

const PrivacyPolicy = () => (
  <>
    <PrivacyHeading />
    <PrivacyContent />
  </>
);

export default PrivacyPolicy;
