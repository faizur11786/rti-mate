import Container from '@/components/Container'

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <Container>
                <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook
                                </a></li><a href="#" className="hover:underline">
                            </a><li className="mb-4"><a href="#" className="hover:underline">
                            </a><a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Windows</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="py-6 px-4 bg-gray-700 text-center">
                <span className="text-sm text-gray-300 text-center">© 2022 <a href="https://flowbite.com">Flowbite™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer