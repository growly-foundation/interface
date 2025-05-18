import { ChatWidget, SuiteProvider } from '@getgrowly/suite'
import { useAccount } from 'hooks/useAccount'

const AGENT_ID = '924fdf70-305e-4ae2-841b-e80f3fa98983'
const ORGANIZATION_API_KEY = 'b3803e17-2435-4d5b-8cbe-3638c7ee539c'

export const SuiteProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount()
  return (
    <SuiteProvider
      context={{
        agentId: AGENT_ID,
        organizationApiKey: ORGANIZATION_API_KEY,
        config: {
          display: 'fullView',
        },
        session: {
          walletAddress: account.address,
        },
      }}
    >
      {children}
      <ChatWidget />
    </SuiteProvider>
  )
}
