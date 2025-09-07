import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="app-container">
      {/* 导航栏 */}
      <header className="navbar">
        <div className="logo">锐镀科技</div>
        <nav>
          <a href="#advantages">技术优势</a>
          <a href="#products">产品案例</a>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-content">
          <h1>锐镀科技</h1>
          <p>金属表面处理技术的创新者与引领者</p>
          <div className="cta-buttons">
            <a href="#advantages" className="btn primary">探索技术</a>
            <a href="#products" className="btn secondary">查看案例</a>
          </div>
        </div>
      </section>

      {/* 技术优势区域 */}
      <section id="advantages" className="section advantages">
        <h2>核心技术优势</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="icon">🔬</div>
            <h3>纳米涂层技术</h3>
            <p>采用先进纳米材料，提供卓越的表面硬度和耐腐蚀性</p>
          </div>
          <div className="advantage-card">
            <div className="icon">⚙️</div>
            <h3>智能自动化系统</h3>
            <p>全流程自动化控制，确保处理精度达到微米级标准</p>
          </div>
          <div className="advantage-card">
            <div className="icon">♻️</div>
            <h3>环保工艺体系</h3>
            <p>零排放处理流程，符合国际最严格环保标准</p>
          </div>
        </div>
      </section>

      {/* 产品案例区域占位 */}
      <section id="products" className="section products">
        <h2>产品与成功案例</h2>
        <div className="products-container">
          <h3>主要产品</h3>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">🔬</div>
              <div className="product-content">
                <h4>纳米陶瓷涂层</h4>
                <p>应用于精密模具的高硬度纳米陶瓷涂层，提高耐磨性300%。</p>
                <button className="btn secondary">查看详情</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">⚙️</div>
              <div className="product-content">
                <h4>精密部件电镀</h4>
                <p>高精度电镀工艺，确保镀层均匀性误差小于2微米。</p>
                <button className="btn secondary">查看详情</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">🛡️</div>
              <div className="product-content">
                <h4>耐腐蚀合金涂层</h4>
                <p>针对海洋环境开发的特种合金涂层，耐盐雾性能超过5000小时。</p>
                <button className="btn secondary">查看详情</button>
              </div>
            </div>
          </div>

          <h3 className="case-studies-title">成功案例</h3>
          <div className="case-studies-grid">
            <div className="case-card">
              <div className="case-image">🏭</div>
              <div className="case-content">
                <h4>汽车零部件制造商</h4>
                <p>通过纳米涂层技术，帮助客户将模具寿命延长2倍，降低生产成本40%。</p>
              </div>
            </div>
            <div className="case-card">
              <div className="case-image">🚢</div>
              <div className="case-content">
                <h4>海洋工程公司</h4>
                <p>提供全套耐腐蚀解决方案，使海洋平台部件寿命延长5年。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer>
        <div className="copyright">© 2025 锐镀科技. 保留所有权利.</div>
      </footer>
    </div>
  );
}

export default App
