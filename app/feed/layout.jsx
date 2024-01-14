import React from 'react'

const FeedLayout = ({children,models}) => {
  return (
    <div>
        <main>
            {children}
            {models}
        </main>
    </div>
  )
}

export default FeedLayout