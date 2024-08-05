'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import arabteclogo from "../img/Group 6356172.svg";
import ProjectsLogo from "../img/Group 6356191.svg";
import Rectangle from "../img/Rectangle 1071.svg";
import icon from "../img/Icon.svg";
import icon1 from "../img/Icon1.svg";
import { motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useWindowWidth from '../hooks/useWindowWidth';


const Page = () => {
    const [inv, setInv] = useState(true);
    const [show, setShow] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [animate, setAnimate] = useState(true);
    const [showedit, setshowedit] = useState(false);
    const [showadd, setShowadd] = useState(false);
    const [animatedinputedit, setanimatedinputedit] = useState(false)
    const [lastanim, setlastanim] = useState(true);
    const windowWidth = useWindowWidth();

    const handleClick = () => {
        setInv(!inv);
        setShow(!show);
        setAnimationKey(prevKey => prevKey + 1);
        setAnimate(false);
        if (windowWidth > 1088) {
            setlastanim(false);
        }
    };

    const handleBackClick = () => {
        setInv(!inv);
        setShow(!show);
        setAnimationKey(prevKey => prevKey + 1);

        if (windowWidth > 1088) {
            setlastanim(true);
        }

    };

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        files.reverse();
        const newSelectedFiles = files.map(file => ({
            url: URL.createObjectURL(file),
        }));
        setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
    };

    const addImagesToGallery = () => {
        setGalleryImages([...galleryImages, ...selectedFiles]);
        setSelectedFiles([]);
    };

    const removeImage = (index) => {
        setGalleryImages(galleryImages.filter((_, i) => i !== index));
    };

    const itemVariants = {
        hidden: { opacity: 1, x: -1200 },
        hidden2: { opacity: 1, x: 1200 },
        visible: { opacity: 1, x: 0 },
        exitToRight: { opacity: 1, x: 1200 },
        exitToLeft: { opacity: 1, x: -1200 }
    };

    const animateedit = {
        inputdown: { opacity: 1, y: 255 },
        downanimate: { opacity: 1, y: 192 },
        down: { opacity: 1, y: 400 },
        up: { opacity: 1, y: 0 },
        animationreturn: { opacity: 1, y: 0, transition: { duration: 2.8, type: "spring" } }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
        exit: { opacity: 0, y: 0, transition: { duration: 0.5, ease: easeInOut } }
    };

    const animationend = {
        iftrue: { opacity: 1, x: 25, y: 25, transition: { duration: 0.7, ease: easeInOut } },
        iffalse: { opacity: 1, x: 0, y: 0 },
    };


    useEffect(() => {
        if (windowWidth > 1088) {
            setlastanim(true);
        } else {
            setlastanim(false);
        }
    }, [windowWidth]);
   
    return (
        <motion.div className='contain d-flex flex-row container-width gap-3 '>
            {windowWidth > 1088 ? (
                <motion.div
                    variants={animationend}
                    initial={lastanim ? "iftrue" : "iffalse"}
                    animate={lastanim ? "iftrue" : "iffalse"}
                    transition={{ duration: 0.7, ease: easeInOut }}
                    className={`background height-50 animation-0  `}
                >
                    <div className="text d-flex justify-content-center content-center-s pt-5 mb-3">
                        <Image src={arabteclogo.src} alt="Arabtec Logo" className="ms-3" width={91.504} height={56.964} />
                        <Link href={"/"} className='text-decoration-none'>
                            <p className="text-white ms-2 mt-3">arabtec</p>
                        </Link>
                    </div>
                    <div className='active mb-2 d-flex content-center-s'>
                        <div className='menu d-flex margin55 mb-2 content-center-s align-items-center'>
                            <Link href="/dashboard" className='text-white text-decoration-none w-auto p gap-2 d-flex justify-content-center'>
                                <Image src={ProjectsLogo.src} alt="Projects Logo" width={24} height={28.8} />
                                Projects
                            </Link>
                        </div>
                    </div>
                    <div className='act d-flex content-center-s'>
                        <div className='menu d-flex margin55 content-center-s align-items-center'>
                            <Link href="/blog" className='text-white text-decoration-none w-auto p gap-2 d-flex justify-content-center'>
                                <Image src={Rectangle.src} alt="Blog Logo" width={24} height={28.8} />
                                Blog
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className={`background height-50 animation-0  `}>
                    <div className="text d-flex justify-content-center content-center-s pt-5 mb-3">
                        <Image src={arabteclogo.src} alt="Arabtec Logo" className="ms-3" width={91.504} height={56.964} />
                        <Link href={"/"} className='text-decoration-none'>
                            <p className="text-white ms-2 mt-3">arabtec</p>
                        </Link>
                    </div>
                    <div className='active mb-2 d-flex content-center-s'>
                        <div className='menu d-flex margin55 mb-2 content-center-s align-items-center'>
                            <Link href="/dashboard" className='text-white text-decoration-none w-auto p gap-2 d-flex justify-content-center'>
                                <Image src={ProjectsLogo.src} alt="Projects Logo" width={24} height={28.8} />
                                Projects
                            </Link>
                        </div>
                    </div>
                    <div className='act d-flex content-center-s'>
                        <div className='menu d-flex margin55 content-center-s align-items-center'>
                            <Link href="/blog" className='text-white text-decoration-none w-auto p gap-2 d-flex justify-content-center'>
                                <Image src={Rectangle.src} alt="Blog Logo" width={24} height={28.8} />
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            )}


            <motion.div className="project-control d-flex flex-column flex-lg-row">
                <AnimatePresence >
                    {inv && (
                        <motion.div
                            key={`first-${animationKey}`}
                            initial="hidden"
                            animate="visible"
                            exit={show ? "exitToRight" : "exitToLeft"}
                            variants={itemVariants}
                            transition={{ duration: 0.9, ease: easeOut, }}
                            className="d-flex flex-column flex-lg-row gap-3 projectchild justify-content-center align-items-center ms-xxl-5 ms-lg-5"
                        >
                            <button className={`d-flex justify-content-center align-items-center ${animate ? 'animation-1' : ''}`} onClick={() => { handleClick(); setshowedit(true); setShowadd(false); setanimatedinputedit(true); }}>
                                Edit Existing Project <Image src={icon.src} alt='Edit icon' width={53} height={53} className='ms-3' />
                            </button>
                            <button className={`d-flex justify-content-center align-items-center ${animate ? 'animation-2' : ''}`} onClick={() => { handleClick(); setShowadd(true); setshowedit(true); setanimatedinputedit(false); }}>
                                Add New Project <Image src={icon1.src} alt='Add icon' width={53} height={53} className='ms-3' />
                            </button>
                        </motion.div>
                    )}

                    {show && (
                        <motion.div
                            key={`second-${animationKey}`}
                            initial="hidden2"
                            animate="visible"
                            exit="exitToRight"
                            variants={itemVariants}
                            transition={{ duration: 2.5, ease: easeOut, type: "spring", }}
                            className={`login translateX-50 ${showadd ? '' : 'heightedit'}`}
                        >
                            <div className={`container-xxl`}>
                                <motion.div className={`form-container`} >
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => { handleBackClick(); setanimatedinputedit(true) }} className='btn p-0'>Back</button>
                                        <p>{showadd ? 'Add New Project' : 'Edit Project'}</p>
                                    </div>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={formVariants}
                                        className="row"
                                    >

                                        {showedit && (
                                            <motion.div
                                                initial={showadd ? "up" : "up"}
                                                variants={animateedit}
                                                animate={showadd ? "up" : "inputdown"}
                                                transition={{ duration: 2.8, type: "spring" }}
                                                className={`col`}
                                            >
                                                <label>{showadd ? 'Name' : 'Select Project'}</label>
                                                <AnimatePresence >
                                                    {showadd ? (
                                                        <motion.input
                                                            key="input"
                                                            type="text"
                                                            initial={{ opacity: 1, width: animatedinputedit ? "180%" : "100%" }}
                                                            animate={{ opacity: 1, width: "100%" }}
                                                            transition={{ duration: 0.3 }}
                                                            className={`form-input ${animatedinputedit ? '' : 'w-100'}`}
                                                        />
                                                    ) : (

                                                        <motion.select
                                                            key="select"
                                                            transition={{ duration: 0.3, type: "spring" }}
                                                            className={`form-input ${showadd ? '' : 'max100'}`}
                                                        >
                                                            <option value="Select Project">Select Project</option>
                                                            <option value="Project1">Project1</option>
                                                            <option value="Project2">Project2</option>
                                                            <option value="project3">project3</option>
                                                        </motion.select>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        )}

                                        {showadd && (
                                            <div className="col">
                                                <label>Services</label>
                                                <input type="text" className="form-input" />
                                            </div>
                                        )}
                                    </motion.div>

                                    {showadd && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={formVariants}
                                            className="row"

                                        >
                                            <div className="col">
                                                <label>Location</label>
                                                <input type="text" className="form-input" />
                                            </div>
                                            <div className="col">
                                                <label>Starting Date</label>
                                                <input type="date" className="form-input" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {showadd && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={formVariants}
                                            className="row"
                                        >
                                            <div className="col">
                                                <label>Browse Files</label>
                                                <input type="file" accept="image/*" className="form-input" multiple onChange={handleFileSelect} />
                                            </div>
                                            <div className="col">
                                                <label>Project Thumbnail</label>
                                                <input type="file" accept="image/*" className="form-input" multiple onChange={handleFileSelect} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {showadd && (
                                        <>
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="row"
                                            >
                                                <div className="col">
                                                    <label>Second Description (After The Photo)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                                <div className="col">
                                                    <label>Project Keywords</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                            </motion.div>
                                            <p className="section-title d-flex align-items-center">
                                                <hr /> Arabic Section
                                            </p>
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="row"
                                            >
                                                <div className="col">
                                                    <label>Name (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                                <div className="col">
                                                    <label>Services (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="row"
                                            >
                                                <div className="col">
                                                    <label>Alt Image Project Photo (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                                <div className="col">
                                                    <label>Location (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="row"
                                            >
                                                <div className="col">
                                                    <label>Project Description (On The Photo) (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>
                                                <div className="col">
                                                    <label>Project Keywords (Arabic)</label>
                                                    <input type="text" className="form-input" />
                                                </div>



                                            </motion.div>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="row"
                                            >

                                                <div className="col">
                                                    <label>Second Description (After The Photo)</label>
                                                    <input type="text" className="form-input wid-100" />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="selected-files-preview justify-content-center flex-row flex-wrap d-flex"
                                            >
                                                {selectedFiles.map((fileObj, index) => (
                                                    <div key={index} className="preview-item">
                                                        <Image src={fileObj.url} alt={`Selected ${index + 1}`} width={100} height={70} style={{ margin: '5px' }} />
                                                    </div>
                                                ))}
                                            </motion.div>

                                            {selectedFiles.length > 0 && (
                                                <motion.button
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={formVariants}
                                                    className="add-button m-auto"
                                                    onClick={addImagesToGallery}
                                                >
                                                    Add To Gallery
                                                </motion.button>
                                            )}

                                            <motion.h2
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="gallery-title"
                                            >
                                                Gallery
                                            </motion.h2>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={formVariants}
                                                className="gallery-section"
                                            >
                                                <div className="gallery-content">
                                                    <button className="gallery-button">
                                                        Browse Files
                                                    </button>
                                                </div>
                                                <div className="slider-container">
                                                    <Swiper
                                                        spaceBetween={10}
                                                        slidesPerView={4}
                                                        className="swiper-container"
                                                        breakpoints={{
                                                            340: {
                                                                slidesPerView: 1,
                                                            },
                                                            480: {
                                                                slidesPerView: 2,
                                                            },
                                                            640: {
                                                                slidesPerView: 2,
                                                            },
                                                            768: {
                                                                slidesPerView: 4,
                                                            },
                                                            1024: {
                                                                slidesPerView: 4,
                                                            }
                                                        }}
                                                    >
                                                        {galleryImages.map((imageObj, index) => (
                                                            <SwiperSlide key={index} className="slide-item">
                                                                <Image
                                                                    src={imageObj.url}
                                                                    alt={`Gallery ${index + 1}`}
                                                                    className="slide-image"
                                                                    width={200}
                                                                    height={70}
                                                                />
                                                                <div className="close-button" onClick={() => removeImage(index)}>
                                                                    <span className="close-icon">x</span>
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}

                                    <motion.div
                                        initial={showadd ? "up" : "down"}
                                        variants={animateedit}
                                        animate={showadd ? "up" : "downanimate"}
                                        transition={{ duration: 2.8, type: "spring" }}
                                        className={`gallery-content justify-content-end`}
                                    >
                                        <button className={`gallery-button ${showadd ? '' : 'btn-abs'}`} onClick={() => {
                                            setanimatedinputedit(true)
                                            setShowadd(true);
                                            setshowedit(true);
                                        }}>
                                            Done
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default Page;
