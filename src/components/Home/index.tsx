import { gql, useQuery, NetworkStatus } from '@apollo/client'
// files
import { UsersData, UsersVars } from '../../interfaces/query'

const USERS = gql`
  query GetUsers($pagination: PaginationInput) {
    users(pagination: $pagination) {
      count
      currentPage
      totalPages
      data {
        id
        name
      }
    }
  }
`

const HomeComp = (): JSX.Element => {
  const { loading, error, data, networkStatus } = useQuery<
    UsersData,
    UsersVars
  >(USERS, {
    variables: {
      pagination: {
        limit: 5,
        page: 1,
      },
    },
    notifyOnNetworkStatusChange: true,
  })

  return (
    <main className="items-center w-full min-h-screen bg-blue-100">
      {networkStatus === NetworkStatus.refetch && 'Refetching!'}

      {(loading || !data) && 'Loading...'}
      {error && JSON.stringify(error, null, 4)}

      {data &&
        data.users.data.map((user) => (
          <p className="text-gray-700" key={user.id}>
            {user.name}
          </p>
        ))}
    </main>
  )
}

export default HomeComp
