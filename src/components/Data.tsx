import { gql, useQuery } from '@apollo/client'

type CompanyData = {
  company: {
    name: string
    ceo: string
    cto: string
  }
}

const COMPANY_QUERY = gql`
  query CompanyQuery {
    company {
      name
      ceo
      cto
    }
  }
`

const CompanyData: React.FC = () => {
  const { loading, error, data } = useQuery<CompanyData>(COMPANY_QUERY)

  if (loading) return <p>Fetching company details...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No data found</p>

  const { company } = data

  const nameShortForm = company.name
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className='flex flex-col justify-center p-8  md:px-24 md:pt-12 '>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
        <div className='border-2 border-[#FEE7EA] rounded-[50%] w-[80px] h-[80px]'>
          <div
            style={{
              width: 70,
              height: 70,
              marginTop: '3px',
              marginLeft: '3px',
              color: '#1CC578',
              backgroundColor: '#FEE7EA',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              fontWeight: 'normal',
            }}
          >
            {nameShortForm}
          </div>
        </div>
        <h2 className=' ml-8 text-[24px] text-[#1A1A1A] font-bold'>{company.name}</h2>
      </div>

      <div className='ml-4 my-4'>
        <div className='flex flex-col mt-4 '>
          <p className='text-[#858585] text-[12px]'>CEO:</p>
          <span className='text-[#1A1A1A] text-[16px]'>{company.ceo}</span>
        </div>
        <div className='flex flex-col mt-4 '>
          <p className='text-[#858585] text-[12px]'>CTO:</p>
          <span className='text-[#1A1A1A] text-[16px]'>{company.cto}</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyData
