import React from 'react';
import { FiMessageSquare, FiUsers, FiBookOpen, FiCalendar, FiArrowRight, FiHeart } from 'react-icons/fi';

const Community = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header with gradient underline */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 relative inline-block">
                        Join Our Reading Community
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Connect with fellow book lovers, participate in discussions, and share your reading journey
                    </p>
                </div>
                
                {/* Stats with hover effects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 text-primary">
                            <FiUsers className="text-4xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-secondary mb-2">3,500+</h3>
                        <p className="text-gray-600 text-center">Active Members</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 text-primary">
                            <FiMessageSquare className="text-4xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-secondary mb-2">150+</h3>
                        <p className="text-gray-600 text-center">Discussion Groups</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                        <div className="bg-primary/10 p-5 rounded-full mb-6 text-primary">
                            <FiBookOpen className="text-4xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-secondary mb-2">20+</h3>
                        <p className="text-gray-600 text-center">Monthly Book Clubs</p>
                    </div>
                </div>
                
                {/* Reading groups and join section */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-10 text-white">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="mr-3">Popular Reading Groups</span>
                                <span className="text-xs uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Join Free</span>
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/20 p-3 rounded-full mt-1 group-hover:bg-white/30 transition-colors">
                                        <FiBookOpen className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg group-hover:text-white/90 transition-colors flex items-center">
                                            Fiction Enthusiasts
                                            <span className="ml-2 text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full">723 members</span>
                                        </h4>
                                        <p className="text-white/80 text-sm mt-1">Discussing contemporary fiction and classics</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/20 p-3 rounded-full mt-1 group-hover:bg-white/30 transition-colors">
                                        <FiBookOpen className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg group-hover:text-white/90 transition-colors flex items-center">
                                            Mystery & Thriller Club
                                            <span className="ml-2 text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full">514 members</span>
                                        </h4>
                                        <p className="text-white/80 text-sm mt-1">For fans of suspense and detective stories</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/20 p-3 rounded-full mt-1 group-hover:bg-white/30 transition-colors">
                                        <FiBookOpen className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg group-hover:text-white/90 transition-colors flex items-center">
                                            Science Fiction & Fantasy
                                            <span className="ml-2 text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full">621 members</span>
                                        </h4>
                                        <p className="text-white/80 text-sm mt-1">Explore worlds beyond imagination</p>
                                    </div>
                                </li>
                            </ul>
                            <button className="mt-8 flex items-center text-white/90 hover:text-white font-medium group">
                                <span>View all reading groups</span>
                                <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="md:w-1/2 p-10">
                            <h3 className="text-2xl font-bold text-secondary mb-6">Join Our Community Today</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Become part of our vibrant community of readers. Share recommendations, discover your next favorite book, and connect with like-minded book lovers from around the world.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-600">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiUsers className="text-primary" />
                                    </div>
                                    <span>Connect with readers who share your interests</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiMessageSquare className="text-primary" />
                                    </div>
                                    <span>Participate in thought-provoking discussions</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiCalendar className="text-primary" />
                                    </div>
                                    <span>Attend virtual book club meetings</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center group">
                                    <span>Join Now</span>
                                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full border border-primary text-primary font-medium py-3 px-6 rounded-md hover:bg-primary/5 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Book of the Month with hover effects */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-6 relative inline-block">
                        Book of the Month Discussion
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></span>
                    </h3>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
                    <div className="flex flex-col lg:flex-row">
                        {/* Featured Book */}
                        <div className="lg:w-1/3 p-8 relative overflow-hidden">
                            <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/10 rounded-full"></div>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full"></div>
                            
                            <div className="relative mb-6 group">
                                <img 
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603206535i/54120408.jpg" 
                                    alt="The Midnight Library" 
                                    className="w-full max-w-[200px] h-auto object-cover mx-auto rounded-lg shadow-md group-hover:shadow-lg transition-all"
                                />
                                <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium">
                                    Featured
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <div className="bg-white rounded-full p-2 shadow-md text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                        <FiHeart />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-xl text-secondary mb-1 text-center">The Midnight Library</h4>
                            <p className="text-gray-500 text-sm mb-4 text-center">by Matt Haig</p>
                            <div className="flex justify-center">
                                <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium flex items-center">
                                    <span className="mr-1">4.8</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {/* Discussion Details */}
                        <div className="lg:w-1/3 p-8 border-y lg:border-y-0 lg:border-x border-gray-100">
                            <h3 className="text-xl font-bold text-secondary mb-4">June Discussion</h3>
                            <p className="text-gray-600 mb-6">
                                Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.
                            </p>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-700">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiCalendar className="text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-medium">Next Meeting</span>
                                        <p className="text-sm text-gray-500">June 15, 2023 • 7:00 PM</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center text-gray-700">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiUsers className="text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-medium">Participants</span>
                                        <p className="text-sm text-gray-500">283 members joined</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center text-gray-700">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <FiMessageSquare className="text-primary" />
                                    </div>
                                    <div>
                                        <span className="font-medium">Discussion Topics</span>
                                        <p className="text-sm text-gray-500">15 topics created</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <button className="flex-1 bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center group">
                                    <span>Join Discussion</span>
                                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Member Thoughts & Next Month's Books */}
                        <div className="lg:w-1/3 p-8 bg-gray-50">
                            <h3 className="text-lg font-bold text-secondary mb-4">Member Thoughts</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 mr-2"></div>
                                        <div>
                                            <p className="text-sm font-medium text-secondary">Sarah J.</p>
                                            <div className="flex text-yellow-400 text-xs">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">A thought-provoking read that makes you reflect on life choices and possibilities.</p>
                                </div>
                                
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 mr-2"></div>
                                        <div>
                                            <p className="text-sm font-medium text-secondary">Michael T.</p>
                                            <div className="flex text-yellow-400 text-xs">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">Beautifully written with characters you can't help but connect with.</p>
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-secondary mb-4">Vote for Next Month</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
                                    <div className="relative h-32 mb-2">
                                        <img 
                                            src="https://covers.openlibrary.org/b/id/12726999-M.jpg" 
                                            alt="The Invisible Life of Addie LaRue" 
                                            className="h-full w-full object-cover rounded"
                                        />
                                        <div className="absolute top-0 right-0 m-1 bg-primary/10 text-primary text-xs font-bold px-1.5 py-0.5 rounded">
                                            38%
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium text-center line-clamp-1">The Invisible Life of Addie LaRue</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
                                    <div className="relative h-32 mb-2">
                                        <img 
                                            src="https://covers.openlibrary.org/b/id/10489650-M.jpg" 
                                            alt="The Four Winds" 
                                            className="h-full w-full object-cover rounded"
                                        />
                                        <div className="absolute top-0 right-0 m-1 bg-primary/10 text-primary text-xs font-bold px-1.5 py-0.5 rounded">
                                            62%
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium text-center line-clamp-1">The Four Winds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community; 