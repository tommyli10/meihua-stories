import React from 'react';
import Header from './Header.js';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
