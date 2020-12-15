import numpy as np
import matplotlib.image as img
import matplotlib.pyplot as plt
#X psi 2011
def canalred(im):
    im=img.imread(im)
    im1=np.zeros(im.shape)
    im1[:,:,0]=im[:,:,0]
    plt.imshow(im1)
    plt.show()

def canalgreen(im):
    im=img.imread(im)
    im1=np.zeros(im.shape)
    im1[:,:,1]=im[:,:,1]
    plt.imshow(im1)
    plt.show()

def canalblue(im):
    im=img.imread(im)
    im1=np.zeros(im.shape)
    im1[:,:,2]=im[:,:,2]
    plt.imshow(im1)
    plt.show()

def negatif(im):
    im=img.imread(im)
    im1=1-im
    plt.imshow(im1)
    plt.show()
def fondu (im1,im2,a):
    imn=img.read(im1)
    imm=img.read(im2)
    ime=(1-a)*imn+a*imm
    plt.imshow(ime)
    plt.show()

def blancnoir(im):
    im=img.imread(im)
    for i in range (im.shape[0]-1):
        for j  in range(im.shape[1]-1):
            im[i,j]=(im[i,j,0]+im[i,j,1]+im[i,j,2])/3
    for i in range (im.shape[0]-1):
        for j  in range(im.shape[1]-1):
            if im[i,j,0]>0.6: im[i,j,0]=1
            elif im[i,j,0]<0.3 : im[i,j,0]=0
            else : im[i,j,0]=0.5
    plt.imsave('22.jpg',im)
    plt.imshow(im)
    plt.show()

def inve(im="note.png"):
    im=img.imread(im)
    for i in range (im.shape[0]-1):
        for j  in range(im.shape[1]-1):
            
            if im[i,j,0] == 1. :
                im[i,j]=np.array(c(["33","ff","ff"]),dtype="float32")
            else :
                im[i,j]=np.array([1.,1.,1.],dtype="float32")
    
    plt.imshow(im)
    plt.show()
    plt.imsave("noteb3.png",im)
def c(l):
    return [int(l[0],16)/255,int(l[1],16)/255,int(l[2],16)/255]
inve()
            
##for i in range(1,len(l)+1):
##    plt.subplot(2,3,i)
##    plt.imshow(l[i-1])

