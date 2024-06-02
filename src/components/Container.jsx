
import PropTypes from 'prop-types'
function Container({children}) {
  return (
    <div className="max-w-[1211px] mx-auto w-full xl:px-0 md:px-3 px-1 py-[2rem]">
      {children}
    </div>
  )
}

export default Container

Container.propTypes = {
  children: PropTypes.node
}

