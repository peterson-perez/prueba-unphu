import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';



const LIMIT_PER_PAGE = 5

const UsePagination = () => {

    const { listUsers } = useSelector((state: RootState) => state.user)

    const [search] = useSearchParams()
    const currentPage = Number(search.get('page') || 0)

    const canGoBack = currentPage > 0
    const canGoNext = (currentPage + 1) * LIMIT_PER_PAGE < listUsers.length

    const filteredUsers = () => {
        const offset = currentPage * LIMIT_PER_PAGE
        return listUsers.slice(offset, offset + LIMIT_PER_PAGE);
    }
    

    return {
      currentPage,
      canGoBack,
      canGoNext,
      filteredUsers
    }

}

export default UsePagination;
