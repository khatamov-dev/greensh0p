import PropTypes from 'prop-types'

function Container({children}) {
    return (
        <div className='max-v-[1211px] mx-auto w-full'>
            {children}
        </div>
    )
}

export default Container
Container.propTypes = {
    children: PropTypes.node
}